# ⚙️ ENCONTRO 2 – Arrays, Objetos e Interatividade

> 💡 Manipulando dados e exibindo conteúdo dinâmico.

---

## 🎯 Objetivos
- Trabalhar com arrays e objetos.
- Usar métodos modernos como `map`, `filter`, `forEach`.
- Criar listas dinâmicas com dados estruturados.

---

## 📘 Conteúdo por Slide

### 🖥️ Introdução

**Tema:** Arrays e Objetos no JavaScript.  
**Mensagem principal:** Estruturas de dados são fundamentais para organizar informações.

---

### ⚙️ Arrays

**O que são?**

Arrays são listas ordenadas de valores. Podem conter qualquer tipo de dado, incluindo outros arrays e objetos.

**Exemplo:**

```js
const frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas[1]); // banana
```

```js
const numeros = [1, 2, 3];
const quadrados = numeros.map(n => n * n);
console.log(quadrados); // [1, 4, 9]
```

```js
const linguagens = ["HTML", "CSS", "JavaScript"];
linguagens.forEach(lang => console.log(lang));
```

```js
const produtos = [
  { nome: 'Teclado', preco: 120, estoque: 3, tags: ['periferico'] },
  { nome: 'Mouse', preco: 80, estoque: 0, tags: ['periferico', 'promo'] },
  { nome: 'Monitor', preco: 900, estoque: 5, tags: ['video'] },
  { nome: 'Suporte', preco: 50, estoque: 8, tags: [] },
];

const busca = 'o';
const min = 100;
const max = 1000;

const visiveis = produtos
  .filter(p => p.estoque > 0)                           // apenas disponíveis
  .filter(p => p.preco >= min && p.preco <= max)        // faixa de preço
  .filter(p => p.nome.toLowerCase().includes(busca.toLowerCase()) // busca
  );

console.log(visiveis.map(p => p.nome)); // ['Teclado', 'Monitor']

// Outro: filtrar por tag usando some()
const comPromo = produtos.filter(p => p.tags.some(t => t === 'promo'));
console.log(comPromo.map(p => p.nome)); // ['Mouse']
```

**Métodos úteis:**

- `push()`: adiciona um item ao final.
- `pop()`: remove o último item.
- `map()`: transforma os itens.

---

### 🧩 Objetos

**O que são?**

Objetos são coleções de pares chave-valor. Permitem organizar dados de forma mais estruturada.

**Exemplo:**

```js
const usuario = {
  nome: 'Jaime',
  idade: 30,
  profissao: 'Desenvolvedor'
};
console.log(usuario.nome); // Jaime
```

```js
const chaves = Object.keys(usuario);
console.log(chaves); // ['nome', 'idade', 'profissao']
```

```js
const valores = Object.values(usuario);
console.log(valores); // ['Jaime', 30, 'Desenvolvedor']
```

```js
const entradas = Object.entries(usuario);
console.log(entradas); // [['nome', 'Jaime'], ['idade', 30], ['profissao', 'Desenvolvedor']]
```

**Métodos úteis:**

- `Object.keys()`: retorna as chaves.
- `Object.values()`: retorna os valores.
- `Object.entries()`: retorna pares chave-valor.

---

### 🖥️ Gerando Conteúdo Dinâmico

**Exemplo: Criando uma lista de usuários dinamicamente**

```html
<ul id="user-list"></ul>
<script>
  const usuarios = [
    { nome: 'Jaime', idade: 30 },
    { nome: 'Ana', idade: 25 },
    { nome: 'Carlos', idade: 28 }
  ];

  const userList = document.getElementById('user-list');

  usuarios.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `${user.nome}, ${user.idade} anos`;
    userList.appendChild(li);
  });
</script>
```

```js
const cursos = [{nome: "JS"}, {nome: "CSS"}];
document.querySelector("#lista").innerHTML = 
  cursos.map(c => `<li>${c.nome}</li>`).join("");
```

---

### 🧰 Atividade Prática

A Atividade prática está detalhada no arquivo [projeto/README.md](projeto/README.md).
