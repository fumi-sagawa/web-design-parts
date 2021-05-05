<script>
</script>

<template lang="pug">
footer.footer
  img.footer__logo(src='img/logo.png' alt='BOTA')
  nav.footer__nav
    div.nav__inner
      h4.nav__title About
      ul.nav__list
        li: a(href='.') ホーム
        li: a(href='.') サービス紹介
        li: a(href='.') 特徴
        li: a(href='.') 料金
        li: a(href='.') 事例
        li: a(href='.') よくある質問
    div.nav__inner
      h4.nav__title Company
      ul.nav__list
        li: a(href='.') 会社概要
        li: a(href='.') お知らせ
        li: a(href='.') ブログ
        li: a(href='.') facebook
        li: a(href='.') twitter
    div.nav__inner
      h4.nav__title Contact
      ul.nav__list
        li: a(href='.') お問い合わせ
        li: a(href='.') 資料請求
</template>

<style>
	.footer {
		display: grid;
		grid-template-columns: 281fr 619fr;
	}
	.footer__logo {
		height: 40px;
		width: 40px;
		object-fit: contain;
	}
	.footer__nav {
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: repeat(3, 1fr);
	}
	.nav__inner {
		display: grid;
		align-content: start;
		row-gap: 20px;
	}
	.nav__title {
		font-weight: 700;
	}
	.nav__list {
		display: grid;
		row-gap: 10px;
		a {
			transition: 0.3s;
			&:hover {
				color: #777;
			}
		}
	}
</style>
