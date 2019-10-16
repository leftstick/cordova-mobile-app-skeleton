import { withMixin } from '../helpers/dva'

export default withMixin({
  state: {},
  subscriptions: {
    setLivereloadScript() {
      if (process.env.CORDOVA_BROWSER) {
        const livereloadScriptTag = document.createElement('script')
        livereloadScriptTag.src = 'http://127.0.0.1:18770/build-notify.js'
        document.body.appendChild(livereloadScriptTag)
      }
      return {}
    }
  },
  reducers: {}
})
