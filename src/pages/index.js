/**
 * title: HOME_TITLE
 */
import { connect } from 'dva'
import PropTypes from 'prop-types'
import { FormattedMessage, getLocale, setLocale } from 'umi-plugin-locale'
import { Tabs, Button } from 'antd-mobile'

function HOME({ screenHeight }) {
  return (
    <div>
      <Tabs
        tabs={[
          { title: <FormattedMessage id="TAB_01" /> },
          { title: <FormattedMessage id="TAB_02" /> },
          { title: <FormattedMessage id="TAB_03" /> }
        ]}
        initialPage={1}
        onChange={(tab, index) => {
          console.log('onChange', index, tab)
        }}
        onTabClick={(tab, index) => {
          console.log('onTabClick', index, tab)
        }}
      >
        <div style={{ height: `${screenHeight - 44 - 47}px` }}>Content of first tab</div>
        <div style={{ height: `${screenHeight - 44 - 47}px` }}>Content of second tab</div>
        <div style={{ height: `${screenHeight - 44 - 47}px` }}>Content of third tab</div>
      </Tabs>
      <div>
        <Button
          onClick={() => {
            if (getLocale() === 'zh-CN') {
              return setLocale('en-US')
            }
            return setLocale('zh-CN')
          }}
        >
          <FormattedMessage id="LANG_BTN" />
        </Button>
      </div>
    </div>
  )
}

HOME.propTypes = {
  screenHeight: PropTypes.number
}

export default connect(({ app }) => {
  return {
    screenHeight: app.screenHeight
  }
})(HOME)
