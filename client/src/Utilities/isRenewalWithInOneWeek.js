export default function isRenewalWithinOneWeek(subscriptionDate) {
    const today = new Date();
    const thisYear = today.getFullYear();
    const renewalDate = new Date(subscriptionDate);

    // Adjust the renewalDate's year to this year for comparison
    renewalDate.setFullYear(thisYear);

    console.log('Adjusted Renewal Date: ', renewalDate);

    // Calculate the date one week from today
    const oneWeekLater = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 7
    );

    
    return renewalDate <= oneWeekLater && renewalDate >= today;
}
