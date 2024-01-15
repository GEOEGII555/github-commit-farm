# GitHub commit farm
How to farm commits using this?
1. Fork this repository
2. `git clone` your fork
3. `cd` into the newly created folder and `npm install`
4. Verify that you can `git push` to your fork. Make a dummy file, `git add .`, `git commit -m "test"` and then `git push`
5. `npm index.mjs` or `npm second.mjs`
6. `git push` (ignore if it says that working tree is clean, it auto pushed if you see that message)
7. `git log` to verify that commits got created
8. Done.

# Common errors

1. The current branch has no upstream.
Firstly, verify if you added the origin.
If you did, do `git push --set-upstream origin main`. If it succeeds, it should automatically set it as default, so you won't have to pass the --set-upstream argument every single time.
2. The working tree is clean
Either there's no commits, or it already pushed everything.
