const Run = require("./index.js");
const userInfo = require("./mock/USER_INFO");

const test1 =
  "(name == DANG VAN HIEN && userId == 01648768190) && (identify == CONFIRM)";
const test2 = "(appCode == 2.1.45)";
const test3 =
  "((phoneOs == IOS && appVer == 21460 && appCode == 2.1.46) && (deviceName == iPhone || isNamed == true))";
const test4 = "(name <contains> JOHN)";
const test5 =
  "(email <matches-regex> @rocketmail.com) && (name <ends-with> PETERSON)";
const test6 = "(name <begins-with> J)";
const test7 = "(userId <in> 01648768190, 0903399767, 0933933944)";
const test8 = "(groupId <array-contains> 19112)";
const test9 =
  "(userId <begins-with> 0164 &&  email <matches-regex> @rocketmail.com)";
const test10 = "((device == Samsung || phoneOs == IOS) && isActived != true)";
const test11 =
  "((isReged != true || isActived == true && isNamed == true) && (groupId <array-contains> 136176 && email <matches-regex> @gmail.com))";
const test12 =
  "(agentId <in> 38452438, 38424138, 38432408 && userId <begins-with> 090)";

test(`Test 1: ${test1}`, () => {
  expect(Run(userInfo, test1)).toBe(false);
});

test(`Test 2: ${test2}`, () => {
  expect(Run(userInfo, test2)).toBe(false);
});

test(`Test 3: ${test3}`, () => {
  expect(Run(userInfo, test3)).toBe(true);
});

test(`Test 4: ${test4}`, () => {
  expect(Run(userInfo, test4)).toBe(true);
});

test(`Test 5: ${test5}`, () => {
  expect(Run(userInfo, test5)).toBe(true);
});

test(`Test 6: ${test6}`, () => {
  expect(Run(userInfo, test6)).toBe(true);
});

test(`Test 7: ${test7}`, () => {
  expect(Run(userInfo, test7)).toBe(true);
});

test(`Test 8: ${test8}`, () => {
  expect(Run(userInfo, test8)).toBe(true);
});

test(`Test 9: ${test9}`, () => {
  expect(Run(userInfo, test9)).toBe(true);
});

test(`Test 10: ${test10}`, () => {
  expect(Run(userInfo, test10)).toBe(false);
});

test(`Test 11: ${test11}`, () => {
  expect(Run(userInfo, test11)).toBe(false);
});

test(`Test 12: ${test12}`, () => {
  expect(Run(userInfo, test12)).toBe(false);
});
