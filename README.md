# Eureka 技術課題：


## TinderのカードUIのようなUIをReactで実装してください。
例：https://codepen.io/renatorib/pen/extCA
## 機能要件：
- スマホのブラウザ環境で動作すること
- カードにはユーザーの画像、ニックネーム、年齢を表示
- カード下にNopeボタン、Likeボタンを表示
- Nopeボタンをタップしたときはカードが左に流れるアニメーションが実行され、次のカードが表示される
- Likeボタンをタップしたときはカードが右に流れるアニメーションが実行され、次のカードが表示される
(Advanced)
- スワイプでカードを仕分けできる
- カードの下部をタップすると詳細画面を表示できる

ーーーーーーーーーーーーーーー

## 期限: 早いに越したことない(理想目標：11/16、最低目標：11/23)

## 要件定義
- Material UI を利用して、Response 対応しておく
- コンポーネント設計を利用して各要素を分解、整理をする
  -　StoryBook 用意して開発、設計を行うこと
- スケーラービリティに対応した開発、設計を行なうこと
  - 場合に応じてAPI.BFF を用意しておくこと
- 場合分けの保持：
  - Firebase を利用してAPI を用意したほうがいい(もしできれば)
  - Redux を利用して場合分けすること
  - その際のAPIの　DB設計図を下に示す

## DB の要件定義
  name|type| description
  --|--|--
  id| int | primary key
  name|string(100)| necessary 
  age | int | necessary 
  imgURL |string| necessary 
  liked |array[int]| account_id  (many-to-many)


