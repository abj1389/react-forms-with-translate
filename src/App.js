import './App.scss';
import RegisterForm from './components/RegisterForm/RegisterForm';
import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import Spanish from './lang/es.json';
import French from './lang/fr.json';
import English from './lang/en.json';

const locale = navigator.language;
let defaultMessages;
switch (locale) {
  case 'fr-FR':
    defaultMessages = French;
    break;
  case 'en-EN':
    defaultMessages = English;
    break;
  case 'es-ES':
    defaultMessages = Spanish;
    break;
  default:
    defaultMessages = English;
}

function App() {
  const [messages, setMessages] = React.useState(defaultMessages);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className='App'>
        <RegisterForm></RegisterForm>

        <h2>
          <FormattedMessage id='app:language_selector' />
        </h2>
        <button onClick={() => setMessages(Spanish)}><FormattedMessage id='app:spanish' /></button>
        <button onClick={() => setMessages(English)}><FormattedMessage id='app:english' /></button>
        <button onClick={() => setMessages(French)}><FormattedMessage id='app:french' /></button>

        <select onChange={(event) => setMessages(event.target.value)}>
          <option value={Spanish}>
            <FormattedMessage id='app:spanish' />
          </option>
          <option value={English}>
            <FormattedMessage id='app:english' />
          </option>
          <option value={French}>
            <FormattedMessage id='app:french' />
          </option>
        </select>
      </div>
    </IntlProvider>
  );
}

export default App;
