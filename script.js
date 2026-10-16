document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.querySelector('.copy-email');
const copyStatus = document.querySelector('.copy-status');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('agrimjain056@gmail.com');
    copyStatus.textContent = 'Email copied. Looking forward to hearing from you.';
    copyButton.textContent = 'Copied ✓';
  } catch {
    copyStatus.textContent = 'Please select the email address above to copy it, or click it to send an email.';
  }
});
