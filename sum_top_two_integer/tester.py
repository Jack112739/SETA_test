import json
from solution import sum_two_largest


def main():
    with open("test_case.json", "r") as test_file:
        tests = json.load(test_file)


if __name__ == "main":
    main()
