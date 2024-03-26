$(document).ready(function() {
  // Adiciona um botão de alternância para recolher e expandir o TOC padrão
  $(".toc-toggle").click(function() {
    $(".toc-list").toggleClass("toc-collapsed");
  });
});
