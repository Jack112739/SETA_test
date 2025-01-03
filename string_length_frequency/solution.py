def str_with_most_frequent_length(strings: list[str]) -> list[str]:
    if len(strings) == 0:
        return []
    
    strlen_count = {}
    for string in strings:
        current_strlen = len(string)
        if current_strlen not in strlen_count:
            strlen_count[current_strlen] = 1
        
        else:
            strlen_count[current_strlen] += 1

    most_frequent_count = strlen_count[len(strings[0])]
    for length in strlen_count:
        if strlen_count[length] > most_frequent_count:
            most_frequent_count = strlen_count[length]

    return [s for s in strings if strlen_count[len(s)] == most_frequent_count]
