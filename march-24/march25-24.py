# The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

# Hint: The basic equation of a circle is x2 + y2 = r2.

import random

def estimate_pi(sample_count):
    points_in_circle = 0

    for _ in range(sample_count):
        # Generate random x,y points within [-1,1] range
        x, y = random.uniform(-1,1), random.uniform(-1,1)
        distance_from_center = x**2 + y**2

        # Check if the point is inside the circle
        if distance_from_center <= 1:
            points_in_circle += 1

    # Estimate pi
    pi_estimate = 4 * points_in_circle/sample_count
    return pi_estimate
