const addOne = (params) => {
  return params + 1
}

function a (params)  {
  const b = "b"
  const aa = (params) => {
    return this
  }

  return aa.bind(addOne)("hi")
}

console.log(a(2));