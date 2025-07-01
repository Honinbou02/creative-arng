<script>
  import Card from '../../components/Card.svelte';
  import LinkButton from '../../components/LinkButton.svelte';
  import { obterResumo } from '$lib/api';
  import { onMount } from 'svelte';

  let resumo = { processos: 0, clientes: 0, mensagens: 0, totalFinanceiro: 0 };

  onMount(async () => {
    const token = localStorage.getItem('token');
    const { data } = await obterResumo(token);
    resumo = data;
  });
</script>

<div class="p-6 grid gap-4 grid-cols-2 md:grid-cols-4">
  <Card titulo="Processos" valor={resumo.processos} />
  <Card titulo="Clientes" valor={resumo.clientes} />
  <Card titulo="Mensagens" valor={resumo.mensagens} />
  <Card titulo="Financeiro" valor={'R$ ' + resumo.totalFinanceiro} />
</div>

<div class="mt-8 grid gap-4 grid-cols-1 md:grid-cols-4">
  <LinkButton href="/processos" label="Processos" />
  <LinkButton href="/clientes" label="Clientes" />
  <LinkButton href="/financeiro" label="Financeiro" />
  <LinkButton href="/mensagens" label="Mensagens" />
</div>
