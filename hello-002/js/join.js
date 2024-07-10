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

  // 회원가입 버튼(btn_join)이 클릭되었을때 실행할 함수
  // 이 함수내에서 각 데이터의 유효성 검사를 실행한다
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

    // username 정규식
    const userNameRexp = /^(?=.*[a-z0-9])[a-z0-9]{3,16}$/;
    if (!userNameRexp.test(value_username)) {
      alert("아이디는 3 ~ 16 자리 이내의 영문, 숫자 조합으로 입력하세요");
      input_username.select();
      return false;
    }

    if (!value_password) {
      alert("password를 입력하세요");
      input_password.select();
      return false;
    }

    const passwordRexp =
      /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    if (!passwordRexp.test(value_password)) {
      alert(
        "password는 영문, 숫자, 특수문자 포함 8 ~ 15자리 이내로 입력하세요"
      );
      input_password.select();
      return false;
    }

    if (!value_re_password) {
      alert("re_password를 입력하세요");
      input_re_password.select();
      return false;
    }

    if (value_password !== value_re_password) {
      alert("비밀번호가 일치하지 않습니다");
      input_re_password.select();
      return false;
    }
    join_form.submit();
  };

  btn_join.addEventListener("click", onValidation);
});
