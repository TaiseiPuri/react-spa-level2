import Header from "./components/Header";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Card
          title="こんにちは！レベル2に挑戦中"
          content="このページはReactを使って作成されたシングルページアプリケーションです。複数の『コンポーネント（画面の部品）』を組み合わせて作られています。"
        />
        <Card
          title="今回の学習ポイント"
          content="フォルダからコンポーネントを読み込む方法や、.envファイル（環境変数）の使い方、フォームの入力を受け取ってダミーで送信する方法を学んでいます。"
        />
        <ContactForm />
      </main>
    </>
  );
}

export default App;
