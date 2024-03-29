import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HangmanRoute from './routes/hangman';
import FormRoute from './routes/form';
import { store } from './app/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path={"/hangman/:id"} element={<HangmanRoute />} />
        <Route path="/add-new-level" element={<FormRoute />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h1>404 Not Found</h1>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </Provider>
)

root.render(<Root store={store} />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
