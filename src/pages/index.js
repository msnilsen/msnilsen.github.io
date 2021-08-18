import * as React from "react"
import Layout from '../components/layout'
import { navigate } from '@reach/router';

import indexStyles from '../css/index.module.scss'

// markup
export default function IndexPage() {
  React.useEffect(() => {
    let consoleInput = document.getElementById('console-input');
    setTimeout(() => {
        consoleInput.focus();
        consoleInput.select();
    }, 2250);

    consoleInput.addEventListener('input', (e) => {
        console.log(consoleInput.value)
        let content = consoleInput.value.toLowerCase();
        if (content === 'y' || content === 'yes') {
            navigate('/about')
        } else if (content === 'n' || content === 'no') {
          //No
        }
   });
  }, []);

  return (
    <Layout>
        <div className={ indexStyles.content }>
          <h1>Hi, I'm Matthew<span id="cursor" className="cursor"></span></h1>
          <h2>Learn more about me? (Y/n)</h2>
          <br />
          <div className={ indexStyles.console_box }>
              <span className={ indexStyles.caret }>>&nbsp;</span>
              <input id="console-input" className={ indexStyles.input } type="text" />
          </div>
        </div>
    </Layout>
  )
}
