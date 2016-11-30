for (var smallest = 3000; smallest > 0; smallest--) {
  if (smallest % 10 === 0)
    if (smallest % 9 === 0)
      if (smallest % 8 === 0)
        if (smallest % 7 === 0)
          if (smallest % 6 === 0)
            if (smallest % 5 === 0)
              if (smallest % 4 === 0)
                if (smallest % 3 === 0)
                  if (smallest % 2 === 0)
                    if (smallest % 1 === 0) {
                      console.log("The smallest number that can be divided by each of the numbers from 1 to 10 without any remainder is " + smallest);
                    }

}

for (var smallest = 3000; smallest > 0; smallest--) {
  if (smallest % 10 === 0 && smallest % 9 === 0 && smallest % 8 === 0 &&
    smallest % 7 === 0 && smallest % 6 === 0 && smallest % 5 ===  0 &&
    smallest % 4 === 0 && smallest % 3 === 0 && smallest % 2 === 0 &&
    smallest % 1 === 0) {

    console.log("The smallest number that can be divided by each of the numbers from 1 to 10 without any remainder is " + smallest);
                        }

}
