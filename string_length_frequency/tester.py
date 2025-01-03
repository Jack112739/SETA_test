import json
from solution import str_with_most_frequent_length

def main():
    with open("test_cases.json", "r") as test_file:
        tests = json.load(test_file)
        for test in tests:
            output = str_with_most_frequent_length(test['input'])
            if output != test['expected_output']:
                print(f"wrong answer on test case {test['input']}"
                      + f", expected {test['expected_output']}, found {output}")

if __name__ == "__main__":
    main()
