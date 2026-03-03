import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // ダミーAPIにPOSTリクエストを送信
      const response = await fetch(
        import.meta.env.VITE_API_ENDPOINT ||
          "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) throw new Error("送信エラー");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // フォームをクリア

      // 3秒後にステータスをリセット
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="card">
      <h2>お問い合わせ</h2>

      {status === "success" && (
        <div className="success-message">
          メッセージを送信しました！ダミーAPIへのPOST成功です。
        </div>
      )}

      {status === "error" && (
        <div className="error-message">
          送信に失敗しました。もう一度お試しください。
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">お名前</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">メッセージ</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "送信中..." : "送信する"}
        </button>
      </form>
    </div>
  );
}
