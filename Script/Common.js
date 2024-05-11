// Common.js

// ***************
// Common Functions
class Common
{
	// The Constructor function.
	constructor()
	{
	}

	// ---------------
	// Get Elements

	// Gets the HTMLElement.
	static Element(elementID)
	{
		return document.getElementById(elementID);
	}

	// Gets HTMLElements by Tag.
	static TagElements(parentElement, tag)
	{
		return parentElement.getElementsByTagName(tag);
	}

	// ---------------
	// Binary Search

	// Returns the index of a search item in the array.
	static BinarySearch(array, sortFunction, compareFunction, showAlerts = false)
	{
		let retValue = -1;

		if (array && Array.isArray(array))
		{
			array.sort(sortFunction);

			// Start with middle index.
			let length = array.length;
			let index = Common.MiddleCount(length) - 1;

			let nextCount = 0;
			let lowerBound = 0;
			let upperBound = length - 1;
			retValue = -2;
			while (-2 == retValue)
			{
				if (showAlerts)
				{
					let text = `${lowerBound} to ${upperBound}, (${nextCount}), ${index}`;
					alert(text);
				}

				let result = compareFunction(array[index]);
				switch (result)
				{
					// Item was found.
					case 0:
						retValue = index;
						if (showAlerts)
						{
							alert(`Found: index: ${index}`);
						}
						break;

					// Set previous index.
					case 1:
						// There are no items left.
						if (1 == nextCount)
						{
							retValue = -1;
							break;
						}

						// Get middle index of previous items.
						upperBound = index;
						nextCount = upperBound - lowerBound;
						index = upperBound - Common.MiddleCount(nextCount);
						break;

					// Set next index.
					case -1:
						// There are no items left.
						if (1 == nextCount)
						{
							retValue = -1;
							break;
						}

						// Get middle index of next items.
						lowerBound = index;
						nextCount = upperBound - lowerBound;
						index = lowerBound + Common.MiddleCount(nextCount);
						break;
				}
			}
		}
		return retValue;
	}

	// Returns the middle position of the count value.
	static MiddleCount(count)
	{
		let retValue = 0;
		if (0 == count % 2)
		{
			// Even length.
			retValue = count / 2;
		}
		else
		{
			// Odd length.
			let remainder = count % 2;
			retValue = (count - remainder) / 2 + 1;
		}
		return retValue;
	}

	// ---------------
	// Other Methods

	// Gets the element text.
	static GetText(elementID)
	{
		let retValue = null;

		let element = this.Element(elementID);
		if (element != null)
		{
			retValue = element.innerText;
		}
		return retValue;
	}

	// Gets the element value.
	static GetValue(elementID)
	{
		let retValue = null;

		let element = this.Element(elementID);
		if (element != null)
		{
			retValue = element.value;
		}
		return retValue;
	}

	// Check if an element has a value.
	static HasValue(element)
	{
		let retValue = false;

		if (element && element != null)
		{
			retValue = true;
		}
		return retValue;
	}

	// Sets the element text.
	static SetText(elementID, text)
	{
		let element = this.Element(elementID);
		if (element != null)
		{
			element.innerText = text;
		}
	}

	// Sets the element value.
	static SetValue(elementID, value)
	{
		let element = this.Element(elementID);
		if (element != null)
		{
			element.value = value;
		}
	}

	// Show the properties of an object.
	static ShowProperties(location, item)
	{
		if (item)
		{
			let value = `location: ${location}\r\n`;
			for (let property in item)
			{
				value += `Property: ${property} - ${item[property]}\r\n`;
			}
			alert(value);
		}
	}
}