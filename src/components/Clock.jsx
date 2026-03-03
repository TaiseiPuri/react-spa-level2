import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  // コンポーネントが画面に表示された時に動き出す処理
  useEffect(() => {
    // 1秒（1000ミリ秒）ごとに、最新の時刻をセットするタイマーを設定
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 見えなくなった時はタイマーを止めるお片付け処理
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="card clock-card">
      <h2>現在の時刻</h2>
      <div className="clock-display">{time.toLocaleTimeString("ja-JP")}</div>
      <p>1秒ごとに画面の一部（この時計部分）だけが自動で更新されています。</p>
    </div>
  );
}
