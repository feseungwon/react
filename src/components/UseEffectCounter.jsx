import { useState, useEffect } from "react";

function UseEffectCounter() {
  // TODO 1. count 상태를 만들어주세요.

  // TODO 2. useEffect를 사용해서 count 값이 바뀔 때마다 콘솔에 메시지를 출력해주세요.
  // 출력 예시: "count 값이 변경되었습니다: 1"

  return (
    <div>
      <h1>Counter Component with useEffect</h1>

      {/* TODO 3. count 값을 화면에 보여주세요. */}
      <p>클릭을 ___번 했어요!</p>

      {/* TODO 4. 버튼 클릭 시 count 값이 1 증가하도록 해주세요. */}
      <button>증가 버튼!</button>
    </div>
  );
}

export default UseEffectCounter;
