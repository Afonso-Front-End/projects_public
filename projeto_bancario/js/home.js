const openLoader = () => {
    loader.style.display = 'flex'
}
const closedHome = () => {
    home.style.display = 'none'
}
const closedLoader = () => {
    loader.style.display = 'none'
}
const closedExtrato = () => {
    extrato.style.display = 'none'
}
const closedSaldo = () => {
    saldo.style.display = 'none'
}
const closedDados = () => {
    dados.style.display = 'none'
}
const closedTranferencia = () => {
    transferencia.style.display = 'none'

}
const openTransferencia = () => {
    openLoader()
    closedExtrato()
    closedSaldo()
    closedHome()
    setTimeout(() => {
        closedLoader()
        transferencia.style.display = 'flex'
    }, 1000)
}
const openDados = () => {
    openLoader()
    closedExtrato()
    closedSaldo()
    closedHome()
    closedTranferencia()
    setTimeout(() => {
        closedLoader()
        dados.style.display = 'block'
    }, 1000);
}
const openHome = () => {
    {
        openLoader()
        closedExtrato()
        closedSaldo()
        closedHome()
        closedDados()
        closedTranferencia()
        setTimeout(() => {
            closedLoader()
            home.style.display = 'flex'
        }, 1000);
    }
}
const openSaldo = () => {
    openLoader()
    closedExtrato()
    closedHome()
    closedDados()
    closedTranferencia()
    setTimeout(() => {
        closedLoader()
        saldo.style.display = 'block'
    }, 1000);
}
const openExtrato = () => {
    openLoader()
    closedSaldo()
    closedHome()
    closedDados()
    closedTranferencia()
    setTimeout(() => {
        closedLoader()
        extrato.style.display = 'block'
        if (usuarioLogado.extrato == null && usuarioLogado.recibo == null) {
            textExtrato.style.display = 'flex'
        } else {
            textExtrato.style.display = 'none'
        }
    }, 1000);
}

const comfirm = () => {
    aviso.style.display = 'none'
}
const mensegerErr = () => {
    aviso.style.display = 'flex';
    textaviso.innerHTML = 'Nenhuma conta encontrada.';
}
// ------------------------------------------------- //
// ------------------------------------------------- //
// ------------------------------------------------- //
// ------------------------------------------------- //
usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
users = JSON.parse(localStorage.getItem('usuarios'))

const renderExtrato = () => {
  const section_03 = document.querySelector(".section-03");
  if (usuarioLogado.extrato == null) {
    const p = document.createElement("p");
    p.textContent = "Você não tem histórico de envio de transações";
    section_03.appendChild(p);
  } else {
    for (let index = 0; index < usuarioLogado.extrato.length; index++) {
      const lista_02 = document.createElement("div");
      lista_02.className = "lista-02";
      lista_02.innerHTML = `
        <div class="text-extrato">
          <p>${usuarioLogado.extrato[index].titulo}</p>
        </div>
        
        <div class="text-extrato">
          <p>${usuarioLogado.extrato[index].nome} R$ ${usuarioLogado.extrato[index].valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>
      `;
      section_03.appendChild(lista_02);
    }
  }
};

const renderRecibo = () => {
  const section_03 = document.querySelector(".section-03");
  if (usuarioLogado.recibo == null) {
    const p = document.createElement("p");
    p.textContent = "Você não tem histórico de recebimento";
    section_03.appendChild(p);
  } else {
    for (let index = 0; index < usuarioLogado.recibo.length; index++) {
      const lista_02 = document.createElement("div");
      lista_02.className = "lista-02";
      lista_02.innerHTML = `
        <div>
          <p>${usuarioLogado.recibo[index].titulo}</p>
        </div>
        
        <div>
          <p></p>
          <p>R$ ${usuarioLogado.recibo[index].nome} ${usuarioLogado.extrato[index].valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>
      `;
      section_03.appendChild(lista_02);
    }
  }
};

const renderUser = () => {
  if (usuarioLogado === null) {
    mensegerErr();
  } else {
    const { nome, email, cpf, saldo } = usuarioLogado;
    renderNome.textContent = `Olá ${nome}`;
    topnome.textContent = nome;
    renderSaldo.textContent = `R$ ${saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    dataNome.textContent = `Nome: ${nome}`;
    dataEmail.textContent = `E-mail: ${email}`;
    dataCPF.textContent = `CPF: ${cpf}`;

    renderExtrato();
    renderRecibo();
  }
};

renderUser();

const exite = () => {
  openLoader()
  setTimeout(() => {
    window.location.assign('/projeto_bancario/index.html')
    usuarioLogado = JSON.parse(localStorage.removeItem('usuarioLogado'))
  }, 1000);
}
// ------------------------------------------------- //
// ------------------------------------------------- //
// ------------------------------------------------- //
// ------------------------------------------------- //
const emailNumber = () => {
    buscar.addEventListener("input", function () {
      const value = buscar.value;
      if (!isNaN(value)) {
        buscar.value = value.slice(0, 11);
      }
    });
  };
  emailNumber();
  
  const closed = () => {
    openLoader();
    setInterval(() => {
      closedLoader();
      transferencia.style.display = "flex";
    }, 1000);
  };
  const pesquisar = () => {
    const { nome, email, cpf, saldo } = usuarioLogado;
    let found = false;
    if (buscar.value === email || buscar.value == cpf) {
      aviso.style.display = "flex";
      textaviso.innerHTML =
        "Vocé não pode fazer uma transferencia para a mesma conta.";
    } else {
      for (let index = 0; index < users.length; index++) {
        if (
          buscar.value === users[index].email ||
          buscar.value === users[index].cpf
        ) {
          const { nome, email, cpf, senha } = users[index];
          openLoader();
          setTimeout(() => {
            dataNomeTransf.textContent = `Nome: ${nome}`;
            dataEmailTransf.textContent = `E-mail: ${email}`;
            dataCPFTransf.textContent = `CPF: ${cpf}`;
            transferencia.style.display = "none";
            closedLoader();
            valortransferencia.style.display = "flex";
          }, 1000);
  
          found = true;
          break;
        }
      }
      if (!found) {
        mensegerErr();
      }
    }
  };
  
  const enviar = () => {
    const usuarioLogadoIndex = users.findIndex(
      (user) => user.email === usuarioLogado.email
    );
    const usuarioDestinoIndex = users.findIndex(
      (user) => user.email === buscar.value
    );
  
    const valorInput = document.getElementById("valor");
    const valorTransferencia = parseInt(valorInput.value);
  
    if (valorTransferencia > usuarioLogado.saldo) {
      aviso.style.display = "flex";
      textaviso.innerHTML = "Você não tem saldo suficiente para esta transação.";
    } else if (usuarioDestinoIndex === -1) {
      aviso.style.display = "flex";
      textaviso.innerHTML = "Usuário destino não encontrado.";
    } else {
      let extrato = [];
      let recibo = [];
      extrato.push({
        nome: users[usuarioDestinoIndex].nome,
        titulo: "Você fez uma transferência para",
        // date: day,
        // month: nomeMeses[month],
        valor: valorTransferencia,
      });
  
      recibo.push({
        nome: users[usuarioLogadoIndex].nome,
        titulo: "Você recebeu uma transferência de",
        // date: day,
        // month: nomeMeses[month],
        valor: valorTransferencia,
      });
  
      if (!users[usuarioLogadoIndex].extrato) {
        users[usuarioLogadoIndex].extrato = [];
      }
      users[usuarioLogadoIndex].extrato.push(...extrato);
      if (!usuarioLogado.extrato) {
        usuarioLogado.extrato = [];
      }
      usuarioLogado.extrato.push(...extrato);
  
      if (!users[usuarioDestinoIndex].recibo) {
        users[usuarioDestinoIndex].recibo = [];
      }
  
      users[usuarioDestinoIndex].recibo.push(...recibo);
      const saldoAtualUser = usuarioLogado.saldo;
      const saldoAtualDestino = users[usuarioDestinoIndex].saldo;
  
      const novoSaldoUser = saldoAtualUser - valorTransferencia;
      const novoSaldoDestino = saldoAtualDestino + valorTransferencia;
  
      usuarioLogado.saldo = novoSaldoUser;
      users[usuarioLogadoIndex].saldo = novoSaldoUser;
      users[usuarioDestinoIndex].saldo = novoSaldoDestino;
  
      aviso.style.display = "flex";
      textaviso.innerHTML = "Transferencia realizada com sucesso.";
  
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
  
      localStorage.setItem("usuarios", JSON.stringify(users));
    }
  };
  