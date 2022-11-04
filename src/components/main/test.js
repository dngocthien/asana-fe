function test1(S) {
  let u = 0,
    r = 0,
    d = 0,
    l = 0;
  let len = S.length;
  for (let i = 0; i < len; i++) {
    switch (S.charAt(i)) {
      case "^":
        u++;
        break;
      case ">":
        r++;
        break;
      case "v":
        d++;
        break;
      case "<":
        l++;
        break;
      default:
        break;
    }
  }
  let m = Math.max(u, r, d, l);
  return len - m;
}

function solution2(S, K) {
  let d;
  switch (S) {
    case "Mon":
      d = 2;
      break;
    case "Tue":
      d = 3;
      break;
    case "Wed":
      d = 4;
      break;
    case "Thu":
      d = 5;
      break;
    case "Fri":
      d = 6;
      break;
    case "Sat":
      d = 7;
      break;
    case "Sun":
      d = 1;
      break;
  }
  let d2 = (d + K) % 7;
  let res;
  switch (d2) {
    case 2:
      res = "Mon";
      break;
    case 3:
      res = "Tue";
      break;
    case 4:
      res = "Wed";
      break;
    case 5:
      res = "Thu";
      break;
    case 6:
      res = "Fri";
      break;
    case 7:
      res = "Sat";
      break;
    case 1:
      res = "Sun";
      break;
  }
  return res;
}

function solution3(A) {
  // let A = [1, 23, 112, 45];
  let sum = 0;
  A.forEach((e) => {
    if ((Math.abs(e) + "").length === 2) {
      sum += e;
    }
  });
  return sum;
}
// console.log(solution([1, 23, 112, 45]));

function solution4(T) {
  if (T < 35) {
    return "hypothermia";
  } else if (T < 37.5) {
    return "normal";
  } else if (T < 40.0) {
    return "fever";
  } else {
    return "hyperpyrexia";
  }
}
// console.log(solution("34.5"));

function solution5(S) {
  let len = S.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (S.charAt(i) == S.charAt(j)) return S.charAt(i);
    }
  }
}
