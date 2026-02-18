// Shared script for login and dashboard
function handleLogin(e){
  e.preventDefault();
  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value;
  const err = document.getElementById('error');
  err.textContent = '';
  // Allowed users (username: { password, displayName })
  const allowed = {
    jsmith: { password: 'Demo1234', displayName: 'John Smith' },
    bmars:  { password: 'pass1234', displayName: 'Brian Mars' },
    tswift: { password: 'pass1234', displayName: 'Taylor Swift' }
  };

  const acct = allowed[u];
  if(acct && acct.password === p){
    sessionStorage.setItem('user', u);
    sessionStorage.setItem('displayName', acct.displayName);
    // Redirect to dashboard
    window.location.href = 'dashboard.html';
    return false;
  }
  err.textContent = 'Invalid username or password.';
  return false;
}

function protectAndRenderDashboard(){
  const user = sessionStorage.getItem('user');
  if(!user){
    window.location.href = 'index.html';
    return;
  }
  // Show greeting for jsmith
  const greeting = document.getElementById('greeting');
  const display = sessionStorage.getItem('displayName') || (user ? user : '');
  greeting.textContent = `Hello ${display}`;

  const viewBtn = document.getElementById('view-account');
  const select = document.getElementById('account-select');
  const history = document.getElementById('history');

  viewBtn.addEventListener('click', ()=>{
    if(select.value === 'checking'){
      history.hidden = false;
    } else {
      history.hidden = true;
      alert('Please select an account.');
    }
  });

  document.getElementById('signoff').addEventListener('click', (ev)=>{
    ev.preventDefault();
    sessionStorage.removeItem('user');
    window.location.href = 'index.html';
  });
}

// Auto-run on dashboard pages
if(document.getElementById('greeting')){
  protectAndRenderDashboard();
}
