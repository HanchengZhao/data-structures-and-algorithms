import random

# max level of the skiplist
MAX_LEVEL = 16


class Node:

    def __init__(self, data=-1):
        # node value, suppose all integers
        self.data = data
        # indicate the level this node is at
        self.maxLevel = 0
        # stores the reference to nodes in different levels
        # if the level of this node is l
        # forward[l] is the next node on this level
        # forward[l-n] is the nth node below this node
        self.forwards = [None * MAX_LEVEL]


class SkipList:

    def __init__(self):
        # the total levels of the skiplist
        self.levelCount = 1
        # the starting node
        self.head = Node()

    # returns a random level between 1 and MAX_LEVEL to start inserting values
    # this balances the whole skiplist
    @staticmethod
    def randomLevel():
        level = 1
        for _ in range(1, MAX_LEVEL):
            if random.random() < 0.5:
                level += 1
        return level

    # find the node that has the value
    def find(self, value):
        p = self.head
        # top down loop
        for i in range(self.levelCount - 1, -1, -1):
            # left to right loop
            while p.forwards[i] and p.forwards[i].data < value:
                p = p.forwards[i]
        if p.forwards[0] and p.forwards[0].data == value:
            return p.forwards[0]
        else:
            return None

    # insert a value
    def insert(self, value):
        level = self.randomLevel()
        # record the update node on each level
        update = [None * level]
        newNode = Node(value)
        p = self.head
        for i in range(level - 1, -1, -1):
            while p.forwards[i] and p.forwards[i].data < value:
                p = p.forwards[i]
            update[i] = p
        for i in range(level-1, -1, -1):
            newNode.forwards[i] = update[i].forwards[i]
            update[i].forwards[i] = newNode
        if self.levelCount < level:
            self.levelCount = level

    # remove a value
    def remove(self, value):
        p = self.head
        update = [None * self.levelCount]
        # find the maximum node whose value is smaller than value
        for i in range(self.levelCount - 1, -1, -1):
            while p.forwards[i] and p.forwards[i].data < value:
                p = p.forwards[i]
            update[i] = p
        if p.forwards[0] and p.forwards[0].data == value:  # found this value
            for i in range(self.levelCount, -1, -1):
                if update[i].forwards[i] and update[i].forwards[i].data == value:
                    # link to next node on the same level
                    update[i].forwards[i] = update[i].forward[i].forwards[i]
