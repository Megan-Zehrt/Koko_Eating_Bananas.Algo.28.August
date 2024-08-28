// 875. Koko Eating Bananas



// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.



/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {

    let low = 1;
    let high = Math.max(...piles);

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);

        if (canFinishInTime(mid, piles, h)) {
            high = mid - 1; // Try to find a smaller speed
        } else {
            low = mid + 1; // Increase speed
        }
    }
    
    return low; // The minimum speed to finish in h hours
};

function canFinishInTime(speed, piles, h) {
    let hours = 0;

    for (let i = 0; i < piles.length; i++) {
        hours += Math.ceil(piles[i] / speed);
    }

    return hours <= h;
}