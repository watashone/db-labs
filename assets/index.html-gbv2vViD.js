import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,e as t}from"./app-ej6NlB3i.js";const l="/db-labs/assets/1.1-BhnrbD19.png",i="/db-labs/assets/1.2-lGIDMOJl.png",n="/db-labs/assets/2.1-XVLs81os.png",p="/db-labs/assets/2.2-BSOOZZdD.png",r="/db-labs/assets/3.1-DN2HCWQf.png",o="/db-labs/assets/3.2-CIdfk_ry.png",d="/db-labs/assets/4.1-ClqzrRQv.png",c="/db-labs/assets/4.2-DU-sGQNY.png",h="/db-labs/assets/1.1-DYBnzawF.png",g="/db-labs/assets/1.2-VZG4WWp7.png",D="/db-labs/assets/2.1-De1wnZG0.png",m="/db-labs/assets/2.2-R1vPqtUS.png",b="/db-labs/assets/3.1-G5E0vKKk.png",_="/db-labs/assets/3.2-mMcNQMKB.png",u="/db-labs/assets/4.1-CXdEZwo_.png",B="/db-labs/assets/4.2-Bxtf0IMC.png",E="/db-labs/assets/1.1-DL6kxFoa.png",T="/db-labs/assets/1.2-DX4iVxNM.png",f="/db-labs/assets/2.1-CDtRlb45.png",y="/db-labs/assets/2.2-BkK77TLa.png",z="/db-labs/assets/2.3-CeoM-jcI.png",U="/db-labs/assets/2.4-KlhW9km0.png",S="/db-labs/assets/3.1-BLfjpAAK.png",P="/db-labs/assets/3.2-BKcG_-20.png",G="/db-labs/assets/3.3-CQcLgqrw.png",x="/db-labs/assets/3.4-CcJuecGh.png",k="/db-labs/assets/4.1-BbxH6eH1.png",v="/db-labs/assets/1.1-AgSeHMl1.png",L="/db-labs/assets/1.2-CUKjZxFi.png",O="/db-labs/assets/2.1-BFy8gGME.png",I="/db-labs/assets/2.2-B-zm_ib0.png",C="/db-labs/assets/2.3-CmG7IMJz.png",Z="/db-labs/assets/3.1-CRo4mDoU.png",F="/db-labs/assets/3.2-BeV2Ac9d.png",M="/db-labs/assets/3.3-BwhJyiZe.png",w="/db-labs/assets/4.1-CDGCwkZt.png",A={},K=t('<h1 id="тестування-працездатності-системи" tabindex="-1"><a class="header-anchor" href="#тестування-працездатності-системи"><span>Тестування працездатності системи</span></a></h1><h2 id="короткии-зміст" tabindex="-1"><a class="header-anchor" href="#короткии-зміст"><span>Короткий зміст</span></a></h2><ul><li><a href="#%D1%82%D0%B5%D1%81%D1%82%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F-%D0%BF%D1%80%D0%B0%D1%86%D0%B5%D0%B7%D0%B4%D0%B0%D1%82%D0%BD%D0%BE%D1%81%D1%82%D1%96-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B8">Тестування працездатності системи</a><ul><li><a href="#%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B8%D0%B9-%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D1%96%D0%B9-%D0%B4%D0%BB%D1%8F-user">Основний сценарій для User</a><ul><li><a href="#get">GET</a></li><li><a href="#post">POST</a></li><li><a href="#put">PUT</a></li><li><a href="#delete">DELETE</a></li></ul></li><li><a href="#%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%B8%D0%B9-%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D1%96%D0%B9-%D0%B4%D0%BB%D1%8F-session">Основний сценарій для Session</a><ul><li><a href="#get">GET</a></li><li><a href="#post">POST</a></li><li><a href="#put">PUT</a></li><li><a href="#delete">DELETE</a></li></ul></li><li><a href="#%D0%B2%D0%B8%D0%BA%D0%BB%D1%8E%D1%87%D0%BD%D1%96-%D1%81%D0%B8%D1%82%D1%83%D0%B0%D1%86%D1%96%D1%97-%D0%B4%D0%BB%D1%8F-user">Виключні ситуації для User</a><ul><li><a href="#get">GET</a></li><li><a href="#post">POST</a></li><li><a href="#put">PUT</a></li><li><a href="#delete">DELETE</a></li></ul></li><li><a href="#%D0%B2%D0%B8%D0%BA%D0%BB%D1%8E%D1%87%D0%BD%D1%96-%D1%81%D0%B8%D1%82%D1%83%D0%B0%D1%86%D1%96%D1%97-%D0%B4%D0%BB%D1%8F-session">Виключні ситуації для Session</a><ul><li><a href="#get">GET</a></li><li><a href="#post">POST</a></li><li><a href="#put">PUT</a></li><li><a href="#delete">DELETE</a></li></ul></li></ul></li></ul><h2 id="основнии-сценаріи-для-user" tabindex="-1"><a class="header-anchor" href="#основнии-сценаріи-для-user"><span>Основний сценарій для User</span></a></h2><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get"><span>GET</span></a></h3><p>Get-запит на отримання всіх даних <img src="'+l+'" alt="" loading="lazy"></p><p>Get-запит на отримання даних по ID <img src="'+i+'" alt="" loading="lazy"></p><h3 id="post" tabindex="-1"><a class="header-anchor" href="#post"><span>POST</span></a></h3><p>Post-запит на додавання даних з усіма заповненими полями <img src="'+n+'" alt="" loading="lazy"></p><p>Get-запит на отримання даних створеного User <img src="'+p+'" alt="" loading="lazy"></p><h3 id="put" tabindex="-1"><a class="header-anchor" href="#put"><span>PUT</span></a></h3><p>Put-запит на оновлення name <img src="'+r+'" alt="" loading="lazy"></p><p>Get-запит на отримання даних оновленого User <img src="'+o+'" alt="" loading="lazy"></p><h3 id="delete" tabindex="-1"><a class="header-anchor" href="#delete"><span>DELETE</span></a></h3><p>Delete-запит на видалення даних <img src="'+d+'" alt="" loading="lazy"></p><p>Get-запит на отримання всіх даних (User з ID 5 зник) <img src="'+c+'" alt="" loading="lazy"></p><h2 id="основнии-сценаріи-для-session" tabindex="-1"><a class="header-anchor" href="#основнии-сценаріи-для-session"><span>Основний сценарій для Session</span></a></h2><h3 id="get-1" tabindex="-1"><a class="header-anchor" href="#get-1"><span>GET</span></a></h3><p>Get-запит на отримання всіх даних <img src="'+h+'" alt="" loading="lazy"></p><p>Get-запит на отримання даних по ID <img src="'+g+'" alt="" loading="lazy"></p><h3 id="post-1" tabindex="-1"><a class="header-anchor" href="#post-1"><span>POST</span></a></h3><p>Post-запит на додавання даних з усіма заповненими полями <img src="'+D+'" alt="" loading="lazy"></p><p>Get-запит на отримання даних створеного Session <img src="'+m+'" alt="" loading="lazy"></p><h3 id="put-1" tabindex="-1"><a class="header-anchor" href="#put-1"><span>PUT</span></a></h3><p>Put-запит на оновлення logout_time <img src="'+b+'" alt="" loading="lazy"></p><p>Get-запит на отримання даних оновленого Session <img src="'+_+'" alt="" loading="lazy"></p><h3 id="delete-1" tabindex="-1"><a class="header-anchor" href="#delete-1"><span>DELETE</span></a></h3><p>Delete-запит на видалення даних <img src="'+u+'" alt="" loading="lazy"></p><p>Get-запит на отримання всіх даних (Session з ID 6 зник) <img src="'+B+'" alt="" loading="lazy"></p><h2 id="виключні-ситуаціі-для-user" tabindex="-1"><a class="header-anchor" href="#виключні-ситуаціі-для-user"><span>Виключні ситуації для User</span></a></h2><h3 id="get-2" tabindex="-1"><a class="header-anchor" href="#get-2"><span>GET</span></a></h3><p>Немає User за заданим ID <img src="'+E+'" alt="" loading="lazy"></p><p>Недійсний або відсутній ID користувача <img src="'+T+'" alt="" loading="lazy"></p><h3 id="post-2" tabindex="-1"><a class="header-anchor" href="#post-2"><span>POST</span></a></h3><p>User за заданим ID вже існує <img src="'+f+'" alt="" loading="lazy"></p><p>Необхідно заповнити всі обов&#39;язкові поля <img src="'+y+'" alt="" loading="lazy"></p><p>Вже використовується email <img src="'+z+'" alt="" loading="lazy"></p><p>Role не існує, неможливо створити User <img src="'+U+'" alt="" loading="lazy"></p><h3 id="put-2" tabindex="-1"><a class="header-anchor" href="#put-2"><span>PUT</span></a></h3><p>Немає User за заданим ID <img src="'+S+'" alt="" loading="lazy"></p><p>Необхідно заповнити всі обов&#39;язкові поля <img src="'+P+'" alt="" loading="lazy"></p><p>Вже використовується email <img src="'+G+'" alt="" loading="lazy"></p><p>Role не існує, неможливо оновити User <img src="'+x+'" alt="" loading="lazy"></p><h3 id="delete-2" tabindex="-1"><a class="header-anchor" href="#delete-2"><span>DELETE</span></a></h3><p>Немає User за заданим ID <img src="'+k+'" alt="" loading="lazy"></p><h2 id="виключні-ситуаціі-для-session" tabindex="-1"><a class="header-anchor" href="#виключні-ситуаціі-для-session"><span>Виключні ситуації для Session</span></a></h2><h3 id="get-3" tabindex="-1"><a class="header-anchor" href="#get-3"><span>GET</span></a></h3><p>Немає Session за заданим ID <img src="'+v+'" alt="" loading="lazy"></p><p>Недійсний або відсутній ID користувача <img src="'+L+'" alt="" loading="lazy"></p><h3 id="post-3" tabindex="-1"><a class="header-anchor" href="#post-3"><span>POST</span></a></h3><p>Session за заданим ID вже існує <img src="'+O+'" alt="" loading="lazy"></p><p>Необхідно заповнити всі обов&#39;язкові поля <img src="'+I+'" alt="" loading="lazy"></p><p>User не існує, неможливо створити Session <img src="'+C+'" alt="" loading="lazy"></p><h3 id="put-3" tabindex="-1"><a class="header-anchor" href="#put-3"><span>PUT</span></a></h3><p>Немає Session за заданим ID <img src="'+Z+'" alt="" loading="lazy"></p><p>Необхідно заповнити всі обов&#39;язкові поля <img src="'+F+'" alt="" loading="lazy"></p><p>User не існує, неможливо оновити Session <img src="'+M+'" alt="" loading="lazy"></p><h3 id="delete-3" tabindex="-1"><a class="header-anchor" href="#delete-3"><span>DELETE</span></a></h3><p>Немає Session за заданим ID <img src="'+w+'" alt="" loading="lazy"></p>',59),R=[K];function N(J,Q){return e(),a("div",null,R)}const H=s(A,[["render",N],["__file","index.html.vue"]]),W=JSON.parse('{"path":"/test/","title":"Тестування працездатності системи","lang":"en-US","frontmatter":{"description":"Тестування працездатності системи Короткий зміст Тестування працездатності системи Основний сценарій для User GET POST PUT DELETE Основний сценарій для Session GET POST PUT DELE...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/db-labs/test/"}],["meta",{"property":"og:site_name","content":"Система управління відкритими даними"}],["meta",{"property":"og:title","content":"Тестування працездатності системи"}],["meta",{"property":"og:description","content":"Тестування працездатності системи Короткий зміст Тестування працездатності системи Основний сценарій для User GET POST PUT DELETE Основний сценарій для Session GET POST PUT DELE..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-10T23:14:09.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-10T23:14:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Тестування працездатності системи\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-10T23:14:09.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Короткий зміст","slug":"короткии-зміст","link":"#короткии-зміст","children":[]},{"level":2,"title":"Основний сценарій для User","slug":"основнии-сценаріи-для-user","link":"#основнии-сценаріи-для-user","children":[{"level":3,"title":"GET","slug":"get","link":"#get","children":[]},{"level":3,"title":"POST","slug":"post","link":"#post","children":[]},{"level":3,"title":"PUT","slug":"put","link":"#put","children":[]},{"level":3,"title":"DELETE","slug":"delete","link":"#delete","children":[]}]},{"level":2,"title":"Основний сценарій для Session","slug":"основнии-сценаріи-для-session","link":"#основнии-сценаріи-для-session","children":[{"level":3,"title":"GET","slug":"get-1","link":"#get-1","children":[]},{"level":3,"title":"POST","slug":"post-1","link":"#post-1","children":[]},{"level":3,"title":"PUT","slug":"put-1","link":"#put-1","children":[]},{"level":3,"title":"DELETE","slug":"delete-1","link":"#delete-1","children":[]}]},{"level":2,"title":"Виключні ситуації для User","slug":"виключні-ситуаціі-для-user","link":"#виключні-ситуаціі-для-user","children":[{"level":3,"title":"GET","slug":"get-2","link":"#get-2","children":[]},{"level":3,"title":"POST","slug":"post-2","link":"#post-2","children":[]},{"level":3,"title":"PUT","slug":"put-2","link":"#put-2","children":[]},{"level":3,"title":"DELETE","slug":"delete-2","link":"#delete-2","children":[]}]},{"level":2,"title":"Виключні ситуації для Session","slug":"виключні-ситуаціі-для-session","link":"#виключні-ситуаціі-для-session","children":[{"level":3,"title":"GET","slug":"get-3","link":"#get-3","children":[]},{"level":3,"title":"POST","slug":"post-3","link":"#post-3","children":[]},{"level":3,"title":"PUT","slug":"put-3","link":"#put-3","children":[]},{"level":3,"title":"DELETE","slug":"delete-3","link":"#delete-3","children":[]}]}],"git":{"createdTime":1708081508000,"updatedTime":1733872449000,"contributors":[{"name":"watashone","email":"balabas191@gmail.com","commits":9},{"name":"dk872","email":"143122117+dk872@users.noreply.github.com","commits":2},{"name":"Dmytro Zanuda","email":"dmzanuda.work@gmail.com","commits":1}]},"readingTime":{"minutes":1.33,"words":399},"filePathRelative":"test/README.md","localizedDate":"February 16, 2024","autoDesc":true}');export{H as comp,W as data};
