const status=document.getElementById('status'),button=document.getElementById('open');
const token=new URLSearchParams(location.hash.slice(1)).get('invite');
if(token&&/^[a-f0-9]{64}$/.test(token)){
  status.textContent='Connecting to your Ghost workspace…';
  try{
    const response=await fetch('./guest-endpoint.json?t='+Date.now(),{cache:'no-store'});
    if(!response.ok)throw new Error('Connection information unavailable.');
    const {origin}=await response.json();
    if(!/^https:\/\/[a-z0-9-]+\.trycloudflare\.com$/.test(origin))throw new Error('Connection not configured.');
    const url=origin+'/#invite='+token;button.href=url;button.hidden=false;
    location.replace(url);
  }catch{status.textContent='The Ghost connection is being updated. Try this invitation again shortly, or ask the host for its current direct link.';}
}else if(token){status.textContent='This invitation is incomplete. Open the entire link your host shared.';}
