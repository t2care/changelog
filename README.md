This is the fork of https://github.com/mikepenz/release-changelog-builder-action. Branch `develop`. The goal is to support Gitea and our URL by default

### Example

```yml
- name: Build Changelog
  uses: https://github.com/t2care/changelog@v4
  env:
    token: ${{ secrets.GITEA_TOKEN }}
```
Or you can declare TOKEN in ORG secrets 

```yml
- name: Build Changelog
  uses: https://github.com/t2care/changelog@v4
```