function checkForSpam(message) {
    const banWorld1 = "spam";
    const banWorld2 = "sale";
    const result1 = message.toLowerCase().includes(banWorld1);
    const result2 = message.toLowerCase().includes(banWorld2);
    const result = result1 || result2;
      if (message == result) {
        return result;
      } else {
        return result;
      }
    }
    
    console.log(checkForSpam("Latest technology news")); // false
    console.log(checkForSpam("JavaScript weekly newsletter")); // false
    console.log(checkForSpam("Get best sale offers now!")); // true
    console.log(checkForSpam("Amazing SalE, only tonight!")); // true
    console.log(checkForSpam("Trust me, this is not a spam message")); // true
    console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
    console.log(checkForSpam("[SPAM] How to earn fast money?")); // true