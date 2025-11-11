#include <string>

namespace log_line {
std::string message(std::string line) {
    // return the message
    int startingIndex = line.find(" ");
    return line.substr(startingIndex + 1);
}

std::string log_level(std::string line) {
    int startIndx = line.find("[");
    int endIndx = line.find("]");
    return line.substr(startIndx + 1, endIndx - 1);
    // return the log level
}

std::string reformat(std::string line) {
    // return the reformatted message
    return message(line) + " (" + log_level(line) + ")";
}
}  // namespace log_line
