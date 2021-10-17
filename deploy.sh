#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f https://github.com/angaihimitsu/Tugas-Project-3-Pendataan-Bansos-Frontend-JS-Project.git main

# if you are deploying to https://angaihimitsu.github.io/<REPO>
git push -f https://github.com/angaihimitsu/Tugas-Project-3-Pendataan-Bansos-Frontend-JS-Project.git master:gh-pages

cd -