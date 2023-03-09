import {defineCliConfig} from 'sanity/cli'


const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_DATA_SET

export default defineCliConfig({
  api: {
    projectId,
    dataset
  }
})
