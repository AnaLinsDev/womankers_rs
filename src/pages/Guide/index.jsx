export default function Guide() {
  const hasWindow = typeof window !== "undefined";

  function getMarginMobile() {
    const width = hasWindow ? window.innerWidth : null;
    return width < 620 ? "mx-50" : "";
  }

  return (
    <div className={getMarginMobile()}>
      <div className="guide_content mw-800 justify-text">
        <h2 className="title">Guia</h2>

        <h3 className="title_guide">Inundações</h3>

        <p>
          As inundações são o tipo mais comum de desastre natural no Brasil.
          Elas podem ser causadas por chuvas fortes, transbordamento de rios ou
          mares e falhas em barragens. As inundações podem causar danos à
          propriedade, infraestrutura e colheitas, além de mortes e ferimentos.
        </p>

        <h3 className="title_guide">Secas</h3>
        <p>
          As secas são outro problema comum no Brasil, especialmente nas regiões
          semiáridas do Nordeste. As secas podem causar falta de água, fome e
          desnutrição, além de migração de pessoas em busca de melhores
          condições de vida.
        </p>
        <h3 className="title_guide">Deslizamentos de terra</h3>
        <p>
          Deslizamentos de terra podem ocorrer em áreas montanhosas ou em
          encostas íngremes, especialmente durante chuvas fortes. Eles podem
          causar danos à propriedade, infraestrutura e mortes.
        </p>
        <h3 className="title_guide">Incêndios florestais</h3>
        <p>
          Incêndios florestais são frequentes em áreas com vegetação seca, como
          o Cerrado e a Amazônia. Eles podem ser causados por raios, atividades
          humanas ou causas naturais. Incêndios florestais podem causar danos à
          propriedade, à fauna e à flora, além de problemas respiratórios para a
          população.
        </p>

        <h3 className="title_guide">Tornados</h3>
        <p>
          Tornados são menos comuns no Brasil do que em outros países, mas podem
          ocorrer em algumas regiões, como o Sul e o Centro-Oeste. Eles podem
          causar danos à propriedade, infraestrutura e mortes.
        </p>

        <hr className="guide_divisor" />

        <h2>Como se preparar para um desastre natural</h2>

        <h3 className="title_guide">Fique informado</h3>
        <p>
          É importante estar ciente dos riscos de desastres naturais em sua
          região. Você pode obter informações de fontes confiáveis, como o
          Centro de Previsão de Tempo e Estudos Climáticos (CPTEC) e a Defesa
          Civil.
        </p>
        <h3 className="title_guide">Tenha um plano</h3>
        <p>
          Elabore um plano de emergência para sua família. O plano deve incluir
          o que fazer em caso de um desastre, como onde se abrigar, como entrar
          em contato com familiares e amigos e como obter ajuda.
        </p>
        <h3 className="title_guide">Prepare um kit de emergência</h3>
        <p>
          Um kit de emergência deve conter itens essenciais como água,
          alimentos, medicamentos, primeiros socorros e documentos importantes.
        </p>
        <h3 className="title_guide">Mantenha sua casa segura</h3>
        <p>
          Tome medidas para proteger sua casa de desastres naturais, como
          instalar calhas e telhados adequados e podar árvores que possam cair
          sobre sua casa.
        </p>

        <hr className="guide_divisor" />

        <h2>O que fazer durante um desastre natural</h2>

        <h3 className="title_guide">Siga as instruções das autoridades</h3>
        <p>
          Preste atenção aos avisos e instruções das autoridades locais.
        </p>
        <h3 className="title_guide">Evacue se necessário</h3>
        <p>
          Se você for instruído a evacuar, faça-o imediatamente.
        </p>
        <h3 className="title_guide">Proteja-se</h3>
        <p>
          Procure abrigo em um local seguro, longe de áreas de risco.
        </p>
        <h3 className="title_guide">Mantenha a calma</h3>
        <p>
          É importante manter a calma e seguir as instruções das autoridades.
        </p>

        <hr className="guide_divisor" />

        <h2>Como se recuperar de um desastre natural</h2>
        <h3 className="title_guide">
          Volte para casa apenas quando for seguro
        </h3>
        <p>
          Não volte para casa até que as autoridades declarem que é seguro
          fazê-lo.
        </p>
        <h3 className="title_guide">Avalie os danos</h3>
        <p>
          Verifique se sua casa está danificada. Se houver danos, entre em
          contato com sua companhia de seguros.
        </p>
        <h3 className="title_guide">Procure ajuda</h3>
        <p>
          Se você precisar de ajuda, entre em contato com a Defesa Civil ou com
          outras organizações de ajuda humanitária.
        </p>
      </div>
    </div>
  );
}
