# A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

# Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal.

def minCost(costs):
    if not costs:
        return 0

    N =len(costs)
    K = len(costs[0])

    # Initialize dp array with the costs for the first house
    dp = [[0 for _ in range(K)] for _ in range(N)]
    for k in range(K):
        dp[0][k] = costs[0][k]

    # Fill the dp array
    for i in range(1, N):
        for k in range(K):
            # Find the minimum cost of painting the previous house with a different color
            min_cost = float('inf')
            for j in range(K):
                if j != k:
                    min_cost = min(min_cost, dp[i-1][j])
            dp[i][k] = costs[i][k] + min_cost

    # The answer is the minimum cost of painting the last house with any color
    return min(dp[-1])

# Test Cases
costs = [
    [17, 2, 17],
    [16, 16, 5],
    [14, 3, 19]
]
print(minCost(costs)) # Expect 10

costs2 = [
    [3, 6, 21],
    [5, 7, 2],
    [15, 3, 10]
]

print(minCost(costs2)) # Expect 8
