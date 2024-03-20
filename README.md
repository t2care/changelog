This is the fork of https://github.com/mikepenz/release-changelog-builder-action. Branch `develop`. The goal is to support Gitea by default with our config by default

### Example

```yml
- name: Build Changelog
  uses: https://github.com/t2care/release-changelog-builder-action@v4
  with:
    platform: "gitea" # gitea or github, default is github  
  env:
    token: ${{ secrets.GITEA_TOKEN }}
    baseUrl: ${{ secrets.GITHUB_SERVER_URL }}
```
Or you can declare TOKEN, CHANGELOG_BASEURL and CHANGELOG_PLATFORM in ORG secrets 

```yml
- name: Build Changelog
  uses: https://github.com/t2care/release-changelog-builder-action@v4
```