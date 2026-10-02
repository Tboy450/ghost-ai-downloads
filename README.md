# Ghost A.I. — Windows preview

A local AI studio with conversations, cooperating project-memory layers, file editing and reviewed changes. Ghost is the application; Qwen is the separately downloaded local language model. Adding documents supplies retrievable context and does not retrain weights.

## Download

[Download Ghost 0.3.4 for Windows](https://github.com/Tboy450/ghost-ai-downloads/releases/tag/v0.3.4)

Download the ZIP and its `.sha256` file. This remains an **unsigned preview ZIP with a PowerShell installer**, not a signed EXE/MSIX.

1. Install [Node.js 24 or newer](https://nodejs.org/) if needed. This release was tested on Windows with Node 24.19.0.
2. Extract the ZIP, open `Ghost`, and run **Install Ghost.cmd**. It installs to `%LOCALAPPDATA%\Programs\Ghost` and creates a desktop shortcut without administrator privileges.
3. From the installed folder, run **Setup Ghost.cmd** once. Internet and several GB of disk space are needed to download the official Ollama engine and Qwen3 4B Instruct model.
4. Open the **Ghost** desktop shortcut or **Start Ghost.cmd**. Ghost opens at `http://127.0.0.1:4317`.
5. Run **Check tools** with the local model available. Real checks take about 10–15 minutes. Each tool is offered only after that model passes its own check; a new installation starts unchecked.

## In this release

Seven chat tools: current time, list/read/search project files, propose edits, propose new files, and list installed engines. File traversal and returned reads are bounded and say when results are incomplete. The dispatcher refuses tools outside the current offered set. Review a proposed diff and approve its exact write; applied edits keep checkpoints and offer **Undo** without overwriting later work. **Engines** detects installed software and records project enablement; this is separate from executing commands. Command execution remains pending and is not in this release.

Task mode is the default. **Debate** enables argument analysis. **Think** requests separate reasoning; when the model returns a trace it is expandable. Missing returned reasoning does not prove a lack of internal computation. The profile panel identifies actual model/application/memory facts; generated replies may still misdescribe them.

The separate **Edit file with Ghost** dialog prepares a change to one selected file. It requires approval, supports new files inside an existing parent, and accepts UTF-8 up to 16 KB and 400 lines. Neither editing workflow retrains model weights. Browser control, connected command tools, hosted GitHub account integration, training ratings and admin counters remain pending. A listed provider or saved key is not proof of a functional connection.

After setup, local inference and memory do not need internet. Optional online services and GitHub do. Selected project folders under a sync service may be synced by that service.

## Updating

See `docs/INSTALL.md` in the ZIP. Close the Ghost server before installing the new ZIP into the same installation folder. Program files are backed up under `.install-backups`; `.ghost` data, `.runtime` models and external project folders are preserved. Existing models normally need no redownload. Closing the browser alone does not stop background processes. The package check verifies fresh install and reinstall using fixture data; fresh-machine setup, interrupted upgrades and uninstall remain uncertified. Hardware performance varies.

Source pushes and ZIP releases do not automatically update installed apps or the shared guest service. The shared chat launch page and endpoint are maintained separately from downloads.

## Distribution

This public repository holds download information, release assets and the shared-chat launch page. Development source/history stay in a separate private repository. Distributed JavaScript runtime files are inspectable. Packages exclude private conversations, credentials, development logs, model weights and recovered third-party source archives.

Ollama and Qwen are fetched separately from upstream distributions under their own licenses. Ghost is independent; upstream projects do not endorse it.
