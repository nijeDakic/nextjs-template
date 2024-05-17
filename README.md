This is the Next.js Template v1.0 created by [nijeDakic](https://github.com/nijeDakic). It probably needs some more work but right now it is usable

## Install Template

Create project by running commands below:

```bash
# ./ current folder
npx create-next-app ./ -e github.com/nijedakic/nextjs-template#main
# new folder
npx create-next-app <project-name> -e github.com/nijedakic/nextjs-template#main
```

## How to Run

To run the project, execute the following line of code:

```bash
#on first run
$ npm install
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Actions Folder

Server actions are the experimental feature (hello from future, now it’s stable) that provides a built-in solution for server mutations. You may use server-side form action within this folder. For more information, vist the offical docs!

## Components Folder

I believe there’s no need for an elaborate description, I suppose xD. The only point I would like to make is that you can include “style” and “test” files within a component folder. In this particular case, I prefer to maintain them in separate folders.

## Containers Folder

Well, I especially want to talk about the ‘containers’ folder. This folder essentially serves as a container for your route sections. For example, in the ‘hero-section’ folder, I have an ‘index.tsx’ file, and this file represents a ‘section’ on my home page. With this way, you may have more control over your page sections.

## Store Folder

This folder serves as the repository where I store my global states. In this project, I have employed Zustand. You have the option to utilize libraries such as Redux or manage your files within this folder as per your preference.

## Types Folder

Indeed, the nomenclature of this folder aligns with its intended purpose. Within, I have housed all the TypeScript types that are employed throughout the project.

## Plans for future

Plans for improvement:

- Updated globals.css for texts
- Implemented Database with backend
- Add ESlint
- Add UI library
- Config custom Colors in tailwind
- Config custom css in tailwind
- Look for more useful libraries
- Fix `not-found.ts` so it has some design

[SOURCE](https://medium.com/@mertenercan/nextjs-13-folder-structure-c3453d780366)
