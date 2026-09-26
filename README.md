# Ghost A.I. — Windows preview

A local AI studio with conversations, project memory, a file editor, and optional guided improvement workflows. Ghost is the application; Qwen is the separately downloaded local language model.

## Download

[Download the Windows preview](https://github.com/Tboy450/ghost-ai-downloads/releases/tag/v0.3.1)

Download the ZIP and its `.sha256` file. This is an **unsigned preview ZIP with a PowerShell installer**, not a signed EXE/MSIX.

1. Install [Node.js 24 or newer](https://nodejs.org/) if needed.
2. Extract the ZIP, open `Ghost`, and run **Install Ghost.cmd**. It installs to `%LOCALAPPDATA%\Programs\Ghost` and creates a desktop shortcut without administrator privileges.
3. From the installed folder, run **Setup Ghost.cmd**. Internet and several GB of disk space are needed to download the official Ollama engine and Qwen3 4B Instruct model.
4. Open the **Ghost** desktop shortcut or **Start Ghost.cmd**. Ghost opens at `http://127.0.0.1:4317`.

Task mode is the default. **Debate** enables argument analysis. **Think** requests a separate, expandable thinking stream from a compatible model. The profile panel identifies the running model, application and memory paths. Model replies may still be mistaken; the panel's runtime facts identify the actual installation.

**Edit file with Ghost** prepares a change to one selected file. Review its diff, then explicitly approve the write or reject it. Existing-file edits keep backups and refuse stale originals; new files require an existing parent. Limit: UTF-8, 16 KB, 400 lines. This tool does not run builds/tests or change the model's weights.

After setup, local inference and memory do not need internet. Cloud providers, public chat sites and GitHub workflows do. Git features also require Git and a project repository. A listed provider is not proof that it is connected.

See `docs/INSTALL.md` in the ZIP for update instructions and limits. Close the Ghost server before updating. The installer preserves `.ghost` user data and `.runtime` models and backs up replaced program files. Closing the browser alone does not stop the background processes. Fresh-machine setup, interrupted upgrades and uninstall are not certified yet. Hardware performance varies.

## Distribution

This repository contains public download information and release assets. The development repository and its history stay private. The distributed JavaScript runtime is inspectable. Packages exclude private conversations, credentials, development logs, model weights and recovered third-party source archives.

Ollama and Qwen are fetched separately from their upstream distributions under their own licenses. Ghost is an independent application; upstream projects do not endorse it.
