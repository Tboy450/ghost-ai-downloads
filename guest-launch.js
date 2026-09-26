const status=document.getElementById('status'),button=document.getElementById('open'),retry=document.getElementById('retry');
const token=new URLSearchParams(location.hash.slice(1)).get('invite');
async function connect(){
  button.hidden=true;retry.hidden=true;
  if(!token){status.textContent='Open the complete invitation your host shared. This page by itself does not contain guest access.';return;}
  if(!/^[a-f0-9]{64}$/.test(token)){status.textContent='This invitation is incomplete. Open the entire link your host shared.';return;}
  status.textContent='Checking the Ghost connection…';
  try{
    const response=await fetch('./guest-endpoint.json?t='+Date.now(),{cache:'no-store'});
    if(!response.ok)throw new Error();
    const data=await response.json(),origin=data.origin;
    if(!/^https:\/\/[a-z0-9-]+\.trycloudflare\.com$/.test(origin))throw new Error();
    button.href=origin+'/#invite='+token;button.hidden=false;
    status.textContent='Ghost is online. Tap below to open your saved guest workspace.';
  }catch{
    status.textContent='Ghost is offline or its connection is being updated. Ask the host to start sharing, then try again.';
    retry.hidden=false;
  }
}
retry.addEventListener('click',connect);
connect();
