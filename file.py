# Ask the user to input numbers separated by spaces
numbers_input = input("Enter numbers separated by spaces: ")

# Convert the input string into a list of numbers
numbers = [float(num) for num in numbers_input.split()]

# Calculate the average
average = sum(numbers) / len(numbers)

print(f"\nAverage: {average:.2f}")
print("Numbers above or below the average:")

# Check each number against the average
for num in numbers:
    if num > average:
        print(f"{num} is above average.")
    elif num < average:
        print(f"{num} is below average.")
    else:
        print(f"{num} is equal to the average.")
