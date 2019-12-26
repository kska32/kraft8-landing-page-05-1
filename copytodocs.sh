#!/bin/sh

rm docs/* -rf 
cp build/* docs/ -rf

git add .
git commit -am parallax
git push origin master