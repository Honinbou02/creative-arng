<script>
  import { goto } from '$app/navigation';
  import { login } from '$lib/api';
  let email = '';
  let senha = '';
  let erro = '';

  async function fazerLogin() {
    try {
      const { data } = await login(email, senha);
      localStorage.setItem('token', data.token);
      goto('/dashboard');
    } catch (e) {
      erro = 'Credenciais inválidas';
    }
  }
</script>

<div class="min-h-screen flex items-center justify-center">
  <form on:submit|preventDefault={fazerLogin} class="p-6 bg-white rounded shadow">
    <input type="email" bind:value={email} placeholder="Email" class="mb-3 border p-2 w-full" />
    <input type="password" bind:value={senha} placeholder="Senha" class="mb-3 border p-2 w-full" />
    {#if erro}<p class="text-red-500">{erro}</p>{/if}
    <button class="w-full bg-blue-600 text-white p-2 rounded">Entrar</button>
  </form>
</div>
