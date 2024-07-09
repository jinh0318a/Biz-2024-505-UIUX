document.addEventListener("DOMContentLoaded", () => {
  const join_body = document.querySelector("section.join.body");
  const join_form = join_body.querySelector("form");
  const input_username = join_body.querySelector("input[name='username']");
  const input_password = join_body.querySelector("input[name='password']");
  const input_re_password = join_body.querySelector(
    "input[name='re_password']"
  );
  const input_name = join_body.querySelector("input[name='name']");
  const input_tel = join_body.querySelector("input[name='tel']");
  const btn_join = join_body.querySelector("input.join");

  const onValidation = () => {
    const value_username = input_username.value;
    const value_password = input_password.value;
    const value_re_password = input_re_password.value;

    /*
      회원가입 버튼을 클릭했을때
      1. username, password, re_password 가 입력되었는지 검사하기
      2. password 와 re_password 가 일치하는지 검사하기
      */

    if (!value_username) {
      alert("아이디를 입력하세요");
      input_username.select();
      return false;
    }

    if (!value_password) {
      alert("password를 입력하세요");
      input_password.select();
      return false;
    }
    if (!value_re_password) {
      alert("re_password를 입력하세요");
      input_re_password.select();
      return false;
    }

    if (value_password !== value_re_password) {
      alert("비밀번호가 다릅니다");
      input_re_password.select();
      return false;
    }
    join_form.submit();
  };

  btn_join.addEventListener("click", onValidation);
});
