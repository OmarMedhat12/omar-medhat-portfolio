# Environment Variables

## Contact form (required for submissions to reach Gmail)

1. Open [https://web3forms.com](https://web3forms.com)
2. Enter **omarmedhat0812@gmail.com** and create an access key
3. In Vercel → Project → **Settings → Environment Variables**, add:

| Name | Value |
|---|---|
| `WEB3FORMS_ACCESS_KEY` | *(paste the key from Web3Forms)* |

4. Redeploy (Deployments → … → Redeploy), or push a new commit

Then test the contact form again — messages arrive in that Gmail inbox (check Spam once).
