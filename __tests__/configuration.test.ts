import {clear} from '../src/transform'
import {mergeConfiguration, parseConfiguration, resolveConfiguration} from '../src/utils'
import {DefaultT2CareConfiguration} from '../src/configuration'

jest.setTimeout(180000)
clear()

it('Configurations are merged correctly', async () => {
  const configurationJson = parseConfiguration(`{
    "sort": "DESC",
    "empty_template": "- no magic changes",
    "trim_values": true
}`)
  const configurationFile = resolveConfiguration('', 'configs/configuration.json')

  const mergedConfiguration = mergeConfiguration(configurationJson, configurationFile)

  console.log(mergedConfiguration)
  expect(JSON.stringify(mergedConfiguration)).toEqual(
    `{\"max_tags_to_fetch\":200,\"max_pull_requests\":1000,\"max_back_track_time_days\":1000,\"exclude_merge_branches\":[],\"sort\":\"DESC\",\"template\":\"#\{\{CHANGELOG}}\",\"pr_template\":\"- #\{\{TITLE}}\\n   - PR: ##\{\{NUMBER}}\",\"empty_template\":\"- no magic changes\",\"categories\":[{\"title\":\"## 🚀 Features\",\"labels\":[\"feature\"]},{\"title\":\"## 🐛 Fixes\",\"labels\":[\"fix\"]},{\"title\":\"## 🧪 Tests\",\"labels\":[\"test\"]}],\"ignore_labels\":[\"ignore\"],\"label_extractor\":[],\"transformers\":[],\"tag_resolver\":{\"method\":\"semver\"},\"base_branches\":[],\"custom_placeholders\":[],\"trim_values\":true}`
  )
})

it('Configuration T2Care is loaded correctly', async () => {
  const mergedConfiguration = mergeConfiguration(DefaultT2CareConfiguration, undefined)
  console.log(mergedConfiguration)
  expect(JSON.stringify(mergedConfiguration)).toEqual(
    '{"max_tags_to_fetch":200,"max_pull_requests":200,"max_back_track_time_days":365,"exclude_merge_branches":[],"sort":{"order":"ASC","on_property":"mergedAt"},"template":"#{{CHANGELOG}}","pr_template":"- #{{TITLE}} ##{{NUMBER}}","empty_template":"- no changes","categories":[{"title":"## 🚀 Features","labels":["feature","enhancement 🤪🦄"]},{"title":"## 🐛 Fixes","labels":["fix","bug 🕵️‍♂️"]},{"title":"## 🧪 Tests","labels":["test","test 🧪🤞"]},{"title":"## 📚 Docs","labels":["📚 Docs"]},{"title":"## 📚 UI","labels":["ui 👀"]},{"title":"## 📦 Uncategorized","labels":[]}],"ignore_labels":["ignore","skip-changelog"],"label_extractor":[{"pattern":"(\\\\w+) (.+)","target":"$1","on_property":"title"}],"transformers":[],"tag_resolver":{"method":"semver"},"base_branches":[],"custom_placeholders":[],"trim_values":false}'
  )
})
