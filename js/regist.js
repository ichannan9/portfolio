function sendit() {
  const userid = document.getElementById("userid");
  const userpw = document.getElementById("userpw");
  const userpw_re = document.getElementById("userpw_re");
  const name = document.getElementById("name");
  const hp = document.getElementById("hp");

  const expIdText = /^[A-Za-z0-9]{4,20}$/;
  const expPwText =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;
  const expNameText = /^[가-힣]+$/;
  const expHpText = /^\d{3}-\d{3,4}-\d{4}$/;
  const ssnText = /^\d{6}[1-4]\d{6}$/;

  if (userid.value === "") {
    alert("아이디를 입력해주세여");
    userid.focus();
    return false;
  }

  if (!expIdText.test(userid.value)) {
    alert("아이디는 4자이상, 20자 이하의 영문자 및 숫자로 입력하세요.");
    userid.focus();
    return false;
  }

  if (!expPwText.test(userpw.value)) {
    alert(
      "비밀번호는 8자이상 20자이하의 영문자, 숫자, 특수문자를 한 자 이상 꼭 포함해야합니다."
    );
    userpw.focus();
    return false;
  }

  if (userpw.value != userpw_re.value) {
    alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    userpw_re.focus();
    return false;
  }

  if (!expNameText.test(name.value)) {
    alert("이름은 한글로 입력하세요.");
    name.focus();
    return false;
  }

  if (!expHpText.test(hp.value)) {
    alert("휴대폰번호 형식이 일치하지 않습니다.\n-하이픈을 꼭 입력하세요");
    hp.focus();
    return false;
  }

  if (ssn.length !== 13 || !ssnText.test(ssn)) {
    alert("주민등록번호를 정확히 입력해주세요.");
    return;

    validateSSN(ssn);
  }

  return true;
}
function validateSSN() {
  const ssn1 = document.getElementById("ssn1").value;
  const ssn2 = document.getElementById("ssn2").value;
  const ssn = ssn1 + ssn2;
  const multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
  let sum = 0;

  for (let i = 0; i < 12; i++) {
    sum += parseInt(ssn[i], 10) * multipliers[i];
  }

  const checkDigit = (11 - (sum % 11)) % 10;

  if (checkDigit === parseInt(ssn[12], 10)) {
    alert("유효한 주민등록번호입니다.");
  } else {
    alert("유효하지 않은 주민등록번호입니다.");
  }
}
