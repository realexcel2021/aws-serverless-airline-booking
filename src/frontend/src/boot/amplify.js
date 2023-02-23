import Amplify from '@aws-amplify/core'
import { Auth } from '@aws-amplify/auth'
import '@aws-amplify/ui-vue'
import awsconfig from '../../aws-exports'

Amplify.configure(awsconfig)
Auth.configure(awsconfig)

Amplify.Logger.LOG_LEVEL = process.env.LOG_LEVEL || 'INFO'
